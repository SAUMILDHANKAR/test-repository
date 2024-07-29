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
      xhr1.responseType = "json";
      xhr1.onload = () => {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
          console.log("level 1 response", xhr1.response);
          console.log("level 1 path", xhr1.response.encrypted_path);
          //
          setTimeout(() => {
            console.log("Delayed for another 1 second.");
            const str1forlevel2 = "https://ciphersprint.pulley.com";
            const strtempforlevel2 = xhr1.response.encrypted_path.slice(5);
            const str2forlevel2 = atob(strtempforlevel2);
            //const str2forlevel2 = strtempforlevel2.slice(5);
            //https://ciphersprint.pulley.com/8c5bb43c88706b43c98d26e7f6affeb
            //task_OGM1YmI0M2M4ODcwNmI0M2M5OGQyNmU3ZjZhZmZlYg==
            const urllevel2 = str1forlevel2.concat('/', str2forlevel2);
      
      
            console.log("url for level 2", urllevel2);
            const xhr2 = new XMLHttpRequest();
            xhr2.open("GET", urllevel2);
            xhr2.send();
            xhr2.onload = () => {
              if (xhr2.readyState == 4 && xhr2.status == 200) {
                console.log("level 2 response", xhr2.response);
                console.log("level 2 path", xhr2.response.encrypted_path);
              }
              else {
                console.log(`Error: ${xhr2.status}`);
              }
            }
            
          }, 1000);
          //
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
