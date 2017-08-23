videojs.registerPlugin('ageGateModal', function() {
  // Get a reference to the player when it is ready
    var myPlayer = this,
        options = {};
    // Define the age gate text
    options.content = 'By clicking here you certify that you are over 18 years old';
    // Give the element some label text
    options.label = 'age gate text';
    // Set the modal dialog as temporary, so that you can remove it
    options.temporary = true;
    // Hide the close button on the modal dialog
    options.uncloseable = true;

    // Get a reference to the modal dialog
    var ModalDialog = videojs.getComponent('ModalDialog');
    // Instantiate the modal dialog with options defined above
    var myModal = new ModalDialog(myPlayer, options);
    // Add the modal dialog class
    myModal.addClass('vjs-my-custom-modal');
    // Add the modal dialog to the DOM
    myPlayer.addChild(myModal);
    // Open the modal dialog
    myModal.open();

    // Listen for the click event on the modal dialog
    myModal.on("click", function(){
      // Close the modal dialog
      myModal.close();
      // Start video playback
      myPlayer.play();
    });
});
