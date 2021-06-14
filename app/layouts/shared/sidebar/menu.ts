import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.COMPTE.TEXT',
        icon: ' ri-user-line',
        link: '/',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.COMPTE.LIST.ENSEMBLE',
                link: '/',
                parentId: 2
            },

            {
                id: 4,
                label: 'MENUITEMS.COMPTE.LIST.RECHERCHE',
                link: '/',
                parentId: 2
            },

            {
                id: 5,
                label: 'MENUITEMS.COMPTE.LIST.MOUVEMENTS',
                link: '/',
                parentId: 2

            },

            {
                id: 6,
                label: 'MENUITEMS.COMPTE.LIST.CFONBCTPER',
                link: '/',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.COMPTE.LIST.HISTORIQUECFONBCT',
                link: '/',
                parentId: 2
            },
            {
                id: 8,
                label: 'MENUITEMS.COMPTE.LIST.CFONBGLOBAL',
                link: '/',
                parentId: 2
            },

        ]
    },
    {

        id: 9,
        label: 'MENUITEMS.VIREMENT.TEXT',
        icon: 'ri-exchange-line',
        link: '/virement/virementcompteacompte',
        subItems: [
            {
                id: 10,
                label: 'MENUITEMS.VIREMENT.LIST.VIREMENTCPTACPT',
                link: '/virement/virementcompteacompte',
                parentId: 9
            },

            {
                id: 11,
                label: 'MENUITEMS.VIREMENT.LIST.VIREMENTVERSBENEF',
                link: '/virement/virementbeneficiaire',
                parentId: 9
            },

            {
                id: 12,
                label: 'MENUITEMS.VIREMENT.LIST.VIREMENTMASSE',
                link: '/virement/virementdemasse',
                parentId: 9

            },

            {
                id: 13,
                label: 'MENUITEMS.VIREMENT.LIST.VIREMENTPERM',
                link: '/virement/virementpermanent',
                parentId: 9
            },

        ]
    },
    {
        id: 14,
        label: 'MENUITEMS.GESTIONBUDGET.TEXT',
        icon: 'ri-wallet-line',
        link: '/budget'
    },
    {
        id: 19,
        label: 'MENUITEMS.CHANGEBOURSE.TEXT',
        icon: 'ri-funds-box-line',
        subItems: [
            {
                id: 20,
                label: 'MENUITEMS.CHANGEBOURSE.LIST.COURSDEV',
                link: '/changebourse/coursdesdevises',
                parentId: 19
            },
            {
                id: 21,
                label: 'MENUITEMS.CHANGEBOURSE.LIST.ANALMARCH',
                link: '/changebourse/analysedemarche',
                parentId: 19
            },
            {
                id: 22,
                label: 'MENUITEMS.CHANGEBOURSE.LIST.COURSSICAV',
                link: '/changebourse/coursdessicav',
                parentId: 19
            },
            {
                id: 23,
                label: 'MENUITEMS.CHANGEBOURSE.LIST.COURSBOURSE',
                link: '/changebourse/coursbourse',
                parentId: 19
            }
        ]
    },

];
