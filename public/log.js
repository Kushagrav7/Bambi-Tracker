let rowString = ""
var dbref = firebase.database().ref()
/* searched fot the number of iputs per category */
dbref.once('value', snap => {
    let longestLength = 0
    console.log(snap.val())
    snap.forEach(childSnap => {
        longestLength = longestLength < childSnap.numChildren() ? childSnap.numChildren() : longestLength
    })

    /* takes the highest index (newest log) and displays it at the top */
    for (let i = 0; i < longestLength; i++) {
        rowString = rowString.concat("<tr>")
        snap.forEach(childSnap => {
            let j = (childSnap.numChildren() - i)
            if (childSnap.hasChild(j.toString())) {
                rowString = rowString.concat("<td>" + childSnap.child(j.toString()).val() + "</td>")
                console.log(childSnap.child(j.toString()).val())
            } else {
                rowString = rowString.concat("<td></td>")
            }
        })
        rowString = rowString.concat("</tr>")
    }
    
    /* adds the data to the table */ 
    console.log(rowString);
    $('#table_body').append(rowString);
});