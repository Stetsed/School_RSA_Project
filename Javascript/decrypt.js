		// Call this code when the page is done loading.
          $(function() {
    
            // We run an decryption function when "Decrypt" button is pressed.
            $('#decrypttt').click(function() {
    
              // Now we set the PrivateKey from the "#privkey" field to the privatekey in the function and then with this key we decrypt "#input"
              var decrypt = new JSEncrypt();
              decrypt.setPrivateKey($('#privkey').val());
              var uncrypted = decrypt.decrypt($('#input').val());
    
              // Now we output the unencrypted tekst with a variable called txtOutput and then set the input textarea to the output.
              var txtOutput = document.getElementById("input");
              txtOutput.value = uncrypted
            });
          });