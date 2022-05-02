console.log("Now rendering server.js");

function tableRowData(values, tag) {
    var dy_table_head_row = document.createElement("tr");
    for (var i = 0; i < values.length; ++i) {
        var dy_table_head = document.createElement(tag);
        dy_table_head.innerHTML = values[i];
        dy_table_head_row.appendChild(dy_table_head);
    }
    return dy_table_head_row;
}

(function() {
    var outer_div = document.createElement("div");
    var dy_table = document.createElement("table");
    dy_table.setAttribute("border", "1");
    dy_table.setAttribute("class", "table")
    var dy_table_head = document.createElement("thead");
    var dy_table_body = document.createElement("tbody");
    dy_table.appendChild(dy_table_head);
    dy_table.appendChild(dy_table_body);
    dy_table_head.appendChild(tableRowData(["Name", "Age", "DOB", "Email", "Company"], "th"));
    dy_table_body.appendChild(tableRowData(["Shivam", "21", "02/11/2001", "shivam.yadav@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table_body.appendChild(tableRowData(["Vishal", "21", "12/01/2000", "vishal.abc+1@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table_body.appendChild(tableRowData(["Abhishek", "20", "23/10/2000", "abhishek.xyz@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table_body.appendChild(tableRowData(["Krishna", "19", "21/07/2002", "krishna.jkl+21@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table_body.appendChild(tableRowData(["Shyam", "34", "04/03/1978", "shyam.jkl+04@geminisolutions.com", "Gemini Solutions"], "td"));
    outer_div.appendChild(dy_table);
    document.body.appendChild(outer_div);
})();