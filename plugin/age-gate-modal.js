videojs.registerPlugin('ageGateModal', function() {
  // Get a reference to the player when it is ready
    var myPlayer = this,
        options = {};

    // +++ Configure the ModalDialog +++
    // Define the age gate text
    options.content = 'By clicking here you certify that you are over 18 years old';
    // Give the element some label text
    options.label = 'age gate text';
    // Set the ModalDialog as temporary, so that you can remove it
    options.temporary = true;
    // Hide the close button on the ModalDialog
    options.uncloseable = true;

    // +++ Instantiate and open the ModalDialog +++
    // Get a reference to the ModalDialog
    var ModalDialog = videojs.getComponent('ModalDialog');
    // Instantiate the ModalDialog with options defined above
    var myModal = new ModalDialog(myPlayer, options);
    // Add custom class to the ModalDialog
    myModal.addClass('vjs-my-custom-modal');
    // Add the ModalDialog to the DOM
    myPlayer.addChild(myModal);
    // Open the ModalDialog
    myModal.open();

    // +++ Listen for the click event on the ModalDialog +++
    myModal.on("click", function(){
      // Close the ModalDialog
      myModal.close();
      // Start video playback
      myPlayer.play();
    });
});
