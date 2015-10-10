
$("#edit_icon").click(function(e) {
    e.preventDefault();
    
    var textDiv = $("#editableText");
    textDiv.attr('contenteditable', 'true');
    textDiv.focus();
    
    updateIcons();
});

$("#save_icon").click(function(e) {
    e.preventDefault();
    
    var textDiv = $("#editableText");
    textDiv.attr('contenteditable', 'false');
    
    updateIcons();
});

$("#refresh_icon").click(function(e) {
    e.preventDefault();
    
    window.location = window.location;
});

function updateIcons() {
    
    var isEditing = ($("#editableText").attr('contentEditable') == 'true');
    
    if (isEditing) {
        $("#edit_icon").hide();
        $("#refresh_icon").hide();
        $("#save_icon").show();
        $("#cancel_icon").show();
    } else {
        $("#edit_icon").show();
        $("#refresh_icon").show();
        $("#save_icon").hide();
        $("#cancel_icon").hide();
    }
}