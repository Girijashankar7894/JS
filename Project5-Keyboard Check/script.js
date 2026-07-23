"use strict"

document.addEventListener("keypress", (el) => {
    document.body.innerHTML = `
        <table border="1">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>

            <tr>
                <td>${el.key == " "? "space" : el.key}</td>
                <td>${el.keyCode}</td>
                <td>${el.code}</td>
            </tr>
        </table>
    `;
}, false);