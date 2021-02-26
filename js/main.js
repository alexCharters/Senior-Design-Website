google.charts.load('current', { 'packages': ['gantt'] });
google.charts.setOnLoadCallback(drawChart);

$(document).ready(() => {
    drawChart()
})

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['Website', 'Website', 'website',
            new Date(2021, 1, 24), new Date(2021, 2, 26), null, 33, null],
        ['WebsiteV1', 'Website V1', 'website',
            new Date(2021, 1, 24), new Date(2021, 1, 26), null, 100, null],
        ['WebsiteV2', 'Website V2', 'website',
            new Date(2021, 1, 26), new Date(2021, 2, 12), null, 0, 'WebsiteV1'],
        ['WebsiteV3', 'Website V3', 'website',
            new Date(2021, 2, 12), new Date(2021, 2, 26), null, 0, 'WebsiteV2'],
        ['proposal', 'Proposal PDF', 'pdf',
            new Date(2021, 1, 24), new Date(2021, 3, 23), null, 0, null],
        ['rough', 'Rough Draft', 'pdf',
            new Date(2021, 1, 24), new Date(2021, 3, 9), null, 0, null],
        ['final', 'Final Draft', 'pdf',
            new Date(2021, 3, 9), new Date(2021, 3, 23), null, 0, 'rough'],
        ['prototype', 'Prototype', 'prototype',
            new Date(2021, 1, 24), new Date(2021, 3, 9), null, 0, null],
        ['vision', 'Vison Tracking', 'prototype',
            new Date(2021, 1, 24), new Date(2021, 2, 12), null, 0, null],
        ['3d', '3D Software Working with Arbitrary Input', 'prototype',
            new Date(2021, 1, 24), new Date(2021, 2, 12), null, 0, null],
        ['stepper', 'Stepper Motor Rotating with Viewer', 'prototype',
            new Date(2021, 2, 12), new Date(2021, 2, 26), null, 0, 'vision,3d'],
        ['complete', 'Completed Prototype', 'prototype',
            new Date(2021, 2, 26), new Date(2021, 3, 9), null, 0, 'stepper'],
        // ['Write', 'Write paper',
        //     null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        // ['Cite', 'Create bibliography',
        //     null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        // ['Complete', 'Hand in paper',
        //     null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        // ['Outline', 'Outline paper',
        //     null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
    ]);

    var options = {
        height: 700,
        width: 1300,
        gantt: {
            sortTasks: false
        }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
}