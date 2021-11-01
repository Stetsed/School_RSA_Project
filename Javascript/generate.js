		$(function () {
    var generateKeys = function () {
      //Set the size of the key that should be generated.
      var sKeySize = $('#keysizee')[0].value;
      // Parse the keysize to the value of keySize
      var keySize = parseInt(sKeySize);
      // Define the crypt function.
      var crypt = new JSEncrypt({default_key_size: keySize});
      // Now with the function we defined earlier we now run getkey which generates the keypair.
      crypt.getKey();
      // Now we set #privkey and #pubkey to there respective keys that where generated.
      $('#privkey').val(crypt.getPrivateKey());
      $('#pubkey').val(crypt.getPublicKey());
    };

    // If they wish to generate new keys.
    $('#Generate').click(generateKeys);
    generateKeys();
  });