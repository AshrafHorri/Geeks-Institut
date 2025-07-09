function createCalendar(year, month) {
    const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    days.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    const date = new Date(year, month - 1, 1);
    const tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let firstDay = (date.getDay() + 6) % 7; // Make Monday=0, Sunday=6
    for (let i = 0; i < firstDay; i++) {
        const td = document.createElement('td');
        td.textContent = '.';
        tr.appendChild(td);
    }
    while (date.getMonth() === month - 1) {
        const td = document.createElement('td');
        td.textContent = date.getDate();
        tr.appendChild(td);
        if (((date.getDay() + 6) % 7) === 6) {
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
        date.setDate(date.getDate() + 1);
    }
    if (tr.children.length > 0) {
        while (tr.children.length < 7) {
            const td = document.createElement('td');
            td.textContent = '.';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

createCalendar(2012, 9);
