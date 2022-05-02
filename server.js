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
    var dy_table_head = document.createElement("thead");
    var dy_table_body = document.createElement("tbody");
    // var dy_table_head_row = document.createElement("tr");
    // var dy_table_head_1 = document.createElement("th");
    // var dy_table_head_2 = document.createElement("th");
    // var dy_table_head_3 = document.createElement("th");
    // var dy_table_head_4 = document.createElement("th");
    // var dy_table_head_5 = document.createElement("th");
    // var dy_table_head_text_1 = document.createTextNode("Name");
    // var dy_table_head_text_2 = document.createTextNode("Age");
    // var dy_table_head_text_3 = document.createTextNode("DOB");
    // var dy_table_head_text_4 = document.createTextNode("Email");
    // var dy_table_head_text_5 = document.createTextNode("Company");
    // dy_table_head_row.appendChild(dy_table_head_1);
    // dy_table_head_row.appendChild(dy_table_head_2);
    // dy_table_head_row.appendChild(dy_table_head_3);
    // dy_table_head_row.appendChild(dy_table_head_4);
    // dy_table_head_row.appendChild(dy_table_head_5);
    // dy_table_head_1.appendChild(dy_table_head_text_1);
    // dy_table_head_2.appendChild(dy_table_head_text_2);
    // dy_table_head_3.appendChild(dy_table_head_text_3);
    // dy_table_head_4.appendChild(dy_table_head_text_4);
    // dy_table_head_5.appendChild(dy_table_head_text_5);

    // var dy_table_head_row_3 = document.createElement("tr");
    // var dy_table_head_12 = document.createElement("td");
    // var dy_table_head_22 = document.createElement("td");
    // var dy_table_head_32 = document.createElement("td");
    // var dy_table_head_42 = document.createElement("td");
    // var dy_table_head_52 = document.createElement("td");
    // var dy_table_head_text_12 = document.createTextNode("Shivam");
    // var dy_table_head_text_22 = document.createTextNode("21");
    // var dy_table_head_text_32 = document.createTextNode("02/11/2001");
    // var dy_table_head_text_42 = document.createTextNode("shivam.yadav@geminisolutions.com");
    // var dy_table_head_text_52 = document.createTextNode("Gemini Solutions");
    // dy_table_head_row_3.appendChild(dy_table_head_12);
    // dy_table_head_row_3.appendChild(dy_table_head_22);
    // dy_table_head_row_3.appendChild(dy_table_head_32);
    // dy_table_head_row_3.appendChild(dy_table_head_42);
    // dy_table_head_row_3.appendChild(dy_table_head_52);
    // dy_table_head_12.appendChild(dy_table_head_text_12);
    // dy_table_head_22.appendChild(dy_table_head_text_22);
    // dy_table_head_32.appendChild(dy_table_head_text_32);
    // dy_table_head_42.appendChild(dy_table_head_text_42);
    // dy_table_head_52.appendChild(dy_table_head_text_52);
    var a = dy_table_head.appendChild(tableRowData(["Name", "Age", "DOB", "Email", "Company"], "th"));
    dy_table.appendChild(a);
    dy_table.appendChild(tableRowData(["Shivam", "21", "02/11/2001", "shivam.yadav@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table.appendChild(tableRowData(["Vishal", "21", "12/01/2000", "vishal.abc+1@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table.appendChild(tableRowData(["Abhishek", "20", "23/10/2000", "abhishek.xyz@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table.appendChild(tableRowData(["Krishna", "19", "21/07/2002", "krishna.jkl+21@geminisolutions.com", "Gemini Solutions"], "td"));
    dy_table.appendChild(tableRowData(["Shyam", "34", "04/03/1978", "shyam.jkl+04@geminisolutions.com", "Gemini Solutions"], "td"));
    outer_div.appendChild(dy_table);
    // dy_table.appendChild(dy_table_head_row_2);
    // dy_table.appendChild(dy_table_head_row_3);
    document.body.appendChild(outer_div);
})();