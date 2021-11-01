		// Call this code when the page is done loading.
      $(function() {

        // Run an encryption function with JSEncrypt
        $('#testme').click(function() {

          // We set the RSA public key from the field "#pubkey" and then use this to encrypt "#input"
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey($('#pubkey').val());
          var encrypted = encrypt.encrypt($('#input').val());

          // Now we we output the variable "Encrypted" to the textarea of "Input"
          var txtOutput = document.getElementById("input");
          txtOutput.value = encrypted
        });
      });