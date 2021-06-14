import { ChartType } from './dashboard.model';

const revenueChart: ChartType = {
    series: [{
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }, {
        name: '2019',
        type: 'line',
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
    }],
    chart: {
        height: 280,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 3],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const salesAnalytics: ChartType = {
    series: [42, 26, 15],
    chart: {
        height: 230,
        type: 'donut',
    },
    labels: ['Product A', 'Product B', 'Product C'],
    plotOptions: {
        pie: {
            donut: {
                size: '75%'
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    colors: ['#5664d2', '#1cbb8c', '#eeb902'],
};

const sparklineEarning: ChartType = {
    series: [72],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#5664d2'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

const sparklineMonthly: ChartType = {
    series: [65],
    chart: {
        type: 'radialBar',
        wight: 60,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#1cbb8c'],
    stroke: {
        lineCap: 'round'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '70%'
            },
            track: {
                margin: 0,
            },

            dataLabels: {
                show: false
            }
        }
    }
};

const chatData = [
    {
        id: 1,
        name: 'Frank Vickery',
        message: 'Hey! I am available',
        image: 'assets/images/users/avatar-2.jpg',
        time: '12:09'
    },
    {
        id: 2,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        text: 'Today'
    },
    {
        id: 3,
        name: 'Frank Vickery',
        message: 'Hello!',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
    },
    {
        id: 4,
        name: 'Frank Vickery',
        message: '& Next meeting tomorrow 10.00AM',
        image: 'assets/images/users/avatar-2.jpg',
        time: '10:06'
    },
    {
        id: 5,
        align: 'right',
        name: 'Ricky Clark',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];
const accounts = [
    {
        DateOperation: '15/12/2021',
        description: 'Transfert',
        numPiece: '',
        Dateval: '16/12/2021',
        Montant: '120.000',
        type: '1'
    },
    {
        DateOperation: '15/12/2021',
        description: 'Transfert',
        numPiece: '',
        Dateval: '16/12/2021',
        Montant: '120.000',
        type: '0'
    },
    {
        DateOperation: '15/12/2021',
        description: 'Transfert',
        numPiece: '',
        Dateval: '16/12/2021',
        Montant: '120.000',
        type: '1'
    },
    {
        DateOperation: '15/12/2021',
        description: 'Transfert',
        numPiece: '',
        Dateval: '16/12/2021',
        Montant: '120.000',
        type: '0'
    }
];
const transactions = [
    {
        orderid: '000110123456',
        date: 'Compte DEMO 1',
        billingname: '12/08/2021',
        total: 'TND',
        paymentstatus: '32 501,730'
    },
    {
        orderid: '081150543314',
        date: 'Compte DEMO 2',
        billingname: '15/05/2021',
        total: 'TND',
        paymentstatus: '7,950'
    }
];

const statData = [
    {
        icon: 'ri-wallet-fill',
        title: 'Solde actuel',
        value: 'TND 1452'
    }, {
        icon: 'ri-arrow-up-fill',
        title: 'Revenues ce mois',
        value: 'TND 38452'
    }, {
        icon: 'ri-arrow-down-fill',
        title: 'Dépenses ce mois',
        value: 'TND 15.4'
    }
];

export { revenueChart, salesAnalytics, sparklineEarning, sparklineMonthly, chatData, transactions, statData,accounts };
