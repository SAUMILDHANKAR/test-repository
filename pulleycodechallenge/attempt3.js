const xhr = new XMLHttpRequest();
xhr.open("GET", "https://ciphersprint.pulley.com/babyyodanemo2020@gmail.com");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("response with email", xhr.response);
    console.log("level 0 path", xhr.response.encrypted_path);
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      const str1 = "https://ciphersprint.pulley.com";
      const str2 = xhr.response.encrypted_path;
      const urllevel1 = str1.concat('/', str2);


      console.log("url for level 1", urllevel1);
      // Expected output: "Hello World"
      const xhr1 = new XMLHttpRequest();
      xhr1.open("GET", urllevel1);
      xhr1.send();
      xhr1.onload = () => {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
          console.log("level 1 response", xhr1.response);
        }
        else {
          console.log(`Error: ${xhr1.status}`);
        }
      }
      
    }, 1000);
    
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
