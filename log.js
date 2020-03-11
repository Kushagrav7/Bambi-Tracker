let rowString = ""
var dbref = firebase.database().ref()
dbref.once('value', snap => {
    let longestLength = 0
    console.log(snap.val())
    snap.forEach(childSnap => {
        longestLength = longestLength < childSnap.numChildren() ? childSnap.numChildren() : longestLength
    })
    for (let i = longestLength; i >= 1; i--) {
        rowString = rowString.concat("<tr>")
        snap.forEach(childSnap => {
            
            if (childSnap.hasChild(i.toString())) {
                rowString = rowString.concat("<td>" + childSnap.child(i.toString()).val() + "</td>")
                console.log(childSnap.child(i.toString()).val())
            } else {
                rowString = rowString.concat("<td></td>")
            }
        })
        rowString = rowString.concat("</tr>")
    }
    
    console.log(rowString);
    $('#table_body').append(rowString);
});