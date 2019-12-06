import { ITableItem, ETableRowComponent, ITableHeader } from '../table.component.interfaces';

const users: ITableItem[] = [
    {
        profileImage: null,
        followings: 0,
        followers: 0,
        deletedAt: null,
        _id: '5ce17f88ccf035c55750c284',
        token: null,
        firstName: 'Luis gabriel',
        lastName: 'Acevedo',
        email: 'user1@galpon.com',
        password: '$2a$10$.1QkeaAF719NblRmOOzGreBWq2aVuo9dmemzL.ot23UdQ8WHFieAe',
        applicationRole: 'USER',
        company: {
            logo: null,
            license: null,
            currencies: [
                'AR $',
                'USD $'
            ],
            _id: '5cca3fcb84ec060ef6e51de7',
            name: 'Date musica internacional AA',
            stores: [
                {
                    name: 'Store 1'
                },
                {
                    name: 'Store 2'
                },
                {
                    name: 'Store 3'
                }
            ]
        }
    },
    {
        company: {
            logo: null,
            profileImage: '5dc00222dd69970e2c1ca03e',
            license: null,
            currencies: [
                'AR $',
                'USD $'
            ],
            admin: '5ccfa068266c0d0b060199c9',
            stores: [
                '5ccce8c16ca70f55a9593056',
                '5ccd09021ef5b000176aa9ed',
                '5ccdf7b2b4e2f06d046144f9'
            ],
            createdAt: '2019-05-02T00:54:35.128Z',
            updatedAt: '2019-11-04T10:49:05.790Z',
            deletedAt: null,
            _id: '5cca3fcb84ec060ef6e51de7',
            name: 'Date musica internacional AA',
            country: '5d80f84db1c0940017f88dfa',
            application: '5cca2327062c7606d986e719'
        },
        application: {
            description: 'Musical instruments shop',
            createdAt: '2019-05-01T22:52:23.605Z',
            updatedAt: '2019-05-01T22:52:23.608Z',
            deletedAt: null,
            _id: '5cca2327062c7606d986e719',
            code: 'COMPANY_TYPE_3',
            name: 'Musical instruments shop'
        },
        userName: 'datemusica@hotmail.com',
        isActive: true,
        role: null,
        userInformation: {
            documentType: 'dni',
            documentNumber: '122222333',
            birthdate: null,
            gender: 'male',
            phone: '11222333',
            address: null,
            createdAt: '2019-05-12T19:38:48.325Z',
            updatedAt: '2019-11-04T16:56:21.705Z',
            deletedAt: null,
            _id: '5cd876488cdc580017eef900'
        },
        userConfigurations: {
            language: 'en',
            currentStore: {
                description: 'Tienda 2',
                address: 'Av santa fe 3942',
                phone: null,
                storeConfigurations: '5ccd09021ef5b000176aa9ec',
                city: 'Buenos aires',
                fax: null,
                license: null,
                createdAt: '2019-05-04T03:37:38.874Z',
                updatedAt: '2019-05-04T03:37:38.875Z',
                deletedAt: null,
                _id: '5ccd09021ef5b000176aa9ed',
                name: 'Sucurcal Palermo',
                company: '5cca3fcb84ec060ef6e51de7',
                application: '5cca2327062c7606d986e719',
                country: '5cca24fb2ee8bd070b12feca'
            },
            createdAt: '2019-05-12T19:38:48.322Z',
            updatedAt: '2019-11-04T16:56:21.629Z',
            deletedAt: null,
            _id: '5cd876488cdc580017eef8ff',
            paletteSelected: null
        },
        profileImage: null,
        followings: 0,
        followers: 0,
        createdAt: '2019-05-12T19:38:48.327Z',
        updatedAt: '2019-11-04T16:56:21.806Z',
        deletedAt: null,
        _id: '5cd876488cdc580017eef901',
        applicationRole: 'USER',
        token: null,
        email: 'datemusica@hotmail.com',
        password: 'Aero1919..',
        firstName: 'Carlos Enrique',
        lastName: 'Ramírez'
    },
    {
        company: {
            logo: null,
            profileImage: '5dc00222dd69970e2c1ca03e',
            license: null,
            currencies: [
                'AR $',
                'USD $'
            ],
            admin: '5ccfa068266c0d0b060199c9',
            stores: [
                '5ccce8c16ca70f55a9593056',
                '5ccd09021ef5b000176aa9ed',
                '5ccdf7b2b4e2f06d046144f9'
            ],
            createdAt: '2019-05-02T00:54:35.128Z',
            updatedAt: '2019-11-04T10:49:05.790Z',
            deletedAt: null,
            _id: '5cca3fcb84ec060ef6e51de7',
            name: 'Date musica internacional AA',
            country: '5d80f84db1c0940017f88dfa',
            application: '5cca2327062c7606d986e719'
        },
        application: {
            description: 'Musical instruments shop',
            createdAt: '2019-05-01T22:52:23.605Z',
            updatedAt: '2019-05-01T22:52:23.608Z',
            deletedAt: null,
            _id: '5cca2327062c7606d986e719',
            code: 'COMPANY_TYPE_3',
            name: 'Musical instruments shop'
        },
        userName: 'luis',
        isActive: true,
        role: null,
        userInformation: {
            documentType: 'dni',
            documentNumber: '95666081',
            birthdate: null,
            gender: 'female',
            phone: '1162342837',
            address: null,
            createdAt: '2019-10-31T23:37:30.847Z',
            updatedAt: '2019-11-01T00:25:45.787Z',
            deletedAt: null,
            _id: '5dbb703ab7eab1296071449c'
        },
        userConfigurations: {
            language: 'en',
            currentStore: {
                description: 'Tienda 3',
                address: 'Almagro calle venezuela 1233',
                phone: null,
                storeConfigurations: '5ccdf7b2b4e2f06d046144f8',
                city: 'Buenos aires',
                fax: null,
                license: null,
                createdAt: '2019-05-04T20:36:02.855Z',
                updatedAt: '2019-05-04T20:36:02.855Z',
                deletedAt: null,
                _id: '5ccdf7b2b4e2f06d046144f9',
                name: 'Sucursal almagro',
                company: '5cca3fcb84ec060ef6e51de7',
                application: '5cca2327062c7606d986e719',
                country: '5cca24fb2ee8bd070b12feca'
            },
            createdAt: '2019-10-31T23:37:30.616Z',
            updatedAt: '2019-11-01T00:25:45.445Z',
            deletedAt: null,
            _id: '5dbb703ab7eab1296071449b'
        },
        profileImage: null,
        followings: 0,
        followers: 0,
        createdAt: '2019-10-31T23:37:31.020Z',
        updatedAt: '2019-11-01T00:25:46.134Z',
        deletedAt: null,
        _id: '5dbb703bb7eab1296071449e',
        applicationRole: 'USER',
        firstName: 'luis',
        lastName: 'acevedo',
        email: 'user1@datemusica.com',
        password: '1221222'
    },
    {
        company: {
            logo: null,
            profileImage: null,
            license: null,
            currencies: [],
            admin: null,
            stores: [
                '5ce08c8c75aba8bd7df7fb98',
                '5ce08dd6771697bd99197545',
                '5ce08df5c39e4bbdaab9fad2'
            ],
            createdAt: '2019-05-18T22:24:29.366Z',
            updatedAt: '2019-05-18T22:24:29.369Z',
            deletedAt: null,
            _id: '5ce0861d108c40bc915572ce',
            name: 'El galpon de ropa',
            country: '5cca24fb2ee8bd070b12feca',
            application: '5ce01e90faf3940017b6b0b2'
        },
        application: {
            description: 'Clothing store',
            createdAt: '2019-05-18T15:02:40.249Z',
            updatedAt: '2019-05-18T15:02:40.253Z',
            deletedAt: null,
            _id: '5ce01e90faf3940017b6b0b2',
            code: 'COMPANY_TYPE_8',
            name: 'Clothing store'
        },
        userName: 'msg',
        isActive: true,
        role: null,
        userInformation: {
            documentType: null,
            documentNumber: null,
            birthdate: null,
            gender: null,
            phone: null,
            address: null,
            createdAt: '2019-05-19T16:46:20.465Z',
            updatedAt: '2019-05-19T16:46:20.465Z',
            deletedAt: null,
            _id: '5ce1885c8cedf5c6417d6dff'
        },
        userConfigurations: {
            language: 'es',
            currentStore: null,
            createdAt: '2019-05-19T16:46:20.272Z',
            updatedAt: '2019-05-19T16:46:20.274Z',
            deletedAt: null,
            _id: '5ce1885c8cedf5c6417d6dfe',
            paletteSelected: null
        },
        profileImage: null,
        followings: 0,
        followers: 0,
        createdAt: '2019-05-19T16:46:20.671Z',
        updatedAt: '2019-05-19T16:46:20.671Z',
        deletedAt: null,
        _id: '5ce1885c8cedf5c6417d6e00',
        token: null,
        firstName: 'Luis Gabriel',
        lastName: 'Ramírez',
        email: 'msg',
        password: '$2a$10$q65vMxFA7KrhinrG5gHyiOHPwAsZuAHY9z32FzBSdBOJ5fKI8gg9G',
        applicationRole: 'USER'
    },
];

const userHeaders: ITableHeader[] = [
    {
        name: 'Name',
        key: 'firstName,lastName',
        component: ETableRowComponent.text
    },
    {
        name: 'Email',
        key: 'email',
        component: ETableRowComponent.text
    },
    {
        name: 'Company',
        key: 'company.name',
        component: ETableRowComponent.text
    },
    {
        name: 'Dni' ,
        key: 'userInformation.documentType',
        component: ETableRowComponent.text
    }
];

export { users, userHeaders };
