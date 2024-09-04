let fs = require('fs')
// fs.unlink('me.txt', (err) =>
// {
//     if(err)
//         console.error("Error deleting file: ", err);
//     console.log("File deleted successfully");
// });
// Synchronously creating a folder

// fs.mkdirSync('Mandem');
// fs.rmdirSync('Mandem');

// Making a directory Asynchronously
// fs.mkdir('Mandem', function(){
//     fs.readFile('./Backend_development.txt', 'utf8', (err, data) =>
//     {
//         if(err)
//             console.error('Error reading file: ', err);
//         fs.writeFile('./Mandem/Newbie.txt', data, (err) =>
//         {
//             if(err)
//                 console.error("Error writing file: ", err);
//             return
//         })
//         console.log("Folder created successfully and file written to.");
//     })
// })

//Deleting a directory asynchronously
// fs.unlink('../lesson2/action.txt', (err) =>
// {
//     if(err)
//         console.error("Error deleting file: ", err);
//     console.log("File deleted successfully");
//     fs.rmdir('../lesson2', function()
//     {
//         console.log("Directory successfully deleted")
//     })
// });

//Making a new directory
// fs.mkdir('../client-servers', () => console.log("Folder created successfully"));

//Automating the file creation process
// fs.writeFile('../client-servers/clienServer.js', "", (err) =>
// {
//     if(err)
//         console.log("Error writing file: ", err);
//     console.log("File created successfully");
//     return
// })

