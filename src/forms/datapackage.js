import React, {useState} from 'react';// {
//     # general "metadata" like title, sources etc
//     "name" : "a-unique-human-readable-and-url-usable-identifier",
//     "title" : "A nice title",
//     "licenses" : [ ... ],
//     "sources" : [...],
//     # list of the data resources in this data package
//     "resources": [
//       {
//         ... resource info described below ...
//       }
//     ],
//     # optional
//     ... additional information ...
//   }

var DataPackage = () => {

    var id, name, title, license, sources, resources;

    var data = {
        "name": name,
        "title": title,
        "license": license,
        "sources": [ sources ],
        "resources": [ resources ],
        "id": id,
    }
    var handleSubmit = () => {
        console.log(data);
    }
    return(
        <>
        Id:  <input type="text" value={id} />
        Name:  <input type="text" value={name} /> 
        Title: <input type="text" value={title} />
        Licenses: <input type="text" value={license} />
        Sources: <input type="text" value={sources} /> 
        Resources: <input type="text" value={resources} />
        <button name="Submit" onClick= {handleSubmit} />
        </>
  )
}
export default DataPackage;