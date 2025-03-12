$(document).ready(function() {
    // Récupérer les éléments par leur ID
    let images = [
        $("#1"),
        $("#2"),
        $("#3"),
        $("#4"),
        $("#5"),
        $("#6")
    ];

    // Fonction pour mélanger le tableau
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        // Réafficher les images dans l'ordre mélangé
        $("#gallery").empty();
        $.each(arr, function(index, image) {
            $("#gallery").append(image);
        });
    }

    // Fonction pour mélanger les images lorsque le bouton est cliqué
    $("#button").click(function() {
        shuffleArray(images);
        enableDragAndDrop();
    });

    // Ajouter la fonctionnalité de drag and drop
    function enableDragAndDrop() {
        images.forEach(function(image) {
            image.prop("draggable", true);
            image.on('dragstart', handleDragStart);
        });

        $(".container").on('dragover', handleDragOver);
        $(".container").on('drop', handleDrop);
    }

    // Variables pour gérer les éléments du drag-and-drop
    let draggedImage = null;

    // Fonction appelée au début du drag
    function handleDragStart(event) {
        draggedImage = $(event.target);
    }

    // Fonction pour permettre le drop sur les conteneurs
    function handleDragOver(event) {
        event.preventDefault();
    }

    // Fonction pour déposer l'image dans le conteneur
    function handleDrop(event) {
        event.preventDefault();
        const container = $(event.target);

        // Ne pas permettre de déplacer l'image si elle est déjà dans le bon conteneur
        if (container.children().length === 0) {
            container.append(draggedImage);
            checkOrder();
        }
    }

    // Fonction pour vérifier l'ordre des images
    function checkOrder() {
        const containers = $(".container");
        const correctOrder = ["1", "2", "3", "4", "5", "6"];
        const currentOrder = [];

        containers.each(function() {
            const image = $(this).children('img').attr('id');
            currentOrder.push(image);
        });

        const message = $("#message");
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            message.text("Vous avez gagné").css("color", "green");
        } else {
            message.text("Vous avez perdu").css("color", "red");
        }
    }
});