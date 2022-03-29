var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {   
        dosbox.run("gzdoom-4-7-1-Windows-64bit.zip", "./gzdoom.exe");
    },
    onrun: function (dosbox, app) {
      console.log("App '" + app + "' is runned");
    }
  });
