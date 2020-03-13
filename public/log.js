let rowString = ""
var dbref = firebase.database().ref()
dbref.once('value', snap => {
    let longestLength = 0
    console.log(snap.val())
    snap.forEach(childSnap => {
        longestLength = longestLength < childSnap.numChildren() ? childSnap.numChildren() : longestLength
    })
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
    
    console.log(rowString);
    $('#table_body').append(rowString);
});