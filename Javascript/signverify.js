		$(function () {
    
          $(function() {
    
            // We run an encryption function when "Decrypt" button is pressed.
            $('#Sign').click(function() {
    
              // We take the tekst from "#input" then with the privatekey from "#privkey" we sign it with the SHA256 from CryptoJS.
              var sign = new JSEncrypt();
              sign.setPrivateKey($('#privkey').val());
              var signature = sign.sign($('#input').val(), CryptoJS.SHA256, "sha256");

              // Now we find the element with the ID of "Signature", and then set the result of the signing to that element.
              var txtOutput = document.getElementById("Signature");
              txtOutput.value = signature
            });
          });
          $(function() {
    
            // We run an verify function when "Verify" button is pressed.
            $('#Verify').click(function() {
  
              var signature = document.getElementById("Signature").value;
              
              // We take the publickey from "#pubkey", and then with this, combined with the signature and the SHA256 from CryptoJS to verify the message from "#input" and then set "verified" which will be true if it matches and false if it doesn't.
              var verify = new JSEncrypt();
              verify.setPublicKey($('#pubkey').val());
              var verified = verify.verify($('#input').val(), signature, CryptoJS.SHA256);

              // Here we make an alert of "The Signature Matches The Message" if verified(Which is decided by the Signature, Hash and Input) it will be true and as such will pass the if statement, else it will give a warning.
              if (verified) {
                alert("The Signature Matches The Message");
              }
              else {
                alert("This Signature Does Not Match The Message & Key Combo")
              }
            });
          });
  });