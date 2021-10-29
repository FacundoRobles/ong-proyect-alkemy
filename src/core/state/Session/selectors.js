import {
    FormatListBulletedRounded, AssignmentRounded, ChatRounded, PhotoLibraryRounded, MenuBookRounded, PeopleAltRounded, PersonRounded, HomeWorkRounded,
    ContactMailRounded
} from '@material-ui/icons';
import {getRoutes} from '@utils';
import get from 'lodash/get';

export const isAuthenticate = state => get(state, 'session.isAuthenticate');
export const getRequestFlag = state => get(state, 'session.flagRequest');
export const getUserAgent = state => get(state, 'session.user.userAgent');
export const getFormWelcomeText = state => get(state, 'session.form');
export const getFieldsWelcomeText = state => get(state, 'session.fields');
export const getSliderItems = state => get(state, 'session.form.items');
const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

export const getNavigationHeader = () => {
    const navigationHeader = [
        {
            name: 'home',
            label: 'Inicio',
            uri: mainRoutes.home
        },
        {
            name: 'organizations',
            label: 'Nosotros',
            uri: mainRoutes.organization
        },
        {
            name: 'activities',
            label: 'Actividades',
            uri: mainRoutes.activity
        },
        {
            name: 'news',
            label: 'Novedades',
            uri: mainRoutes.news
        },
        {
            name: 'testimonials',
            label: 'Testimonios',
            uri: mainRoutes.testimonial
        },
        {
            name: 'contact',
            label: 'Contacto',
            uri: mainRoutes.contact
        },
        {
            name: 'contribute',
            label: 'Contribuye',
            uri: mainRoutes.contribute
        }
    ];
    return navigationHeader;
};

export const menuOffice = () => {
    const menu = [{
        title: 'Novedades',
        icon: MenuBookRounded,
        path: backOfficeRoutes.news.list
    }, {
        title: 'Actividades',
        icon: AssignmentRounded,
        path: mainRoutes.activity
    }, {
        title: 'Categorias',
        icon: FormatListBulletedRounded,
        path: backOfficeRoutes.category.list
    }, {
        title: 'Testimonios',
        icon: ChatRounded,
        path: backOfficeRoutes.testimonial.list
    }, {
        title: 'Organizacion',
        icon: HomeWorkRounded,
        path: backOfficeRoutes.organization.list
    }, {
        title: 'Slides',
        icon: PhotoLibraryRounded,
        path: backOfficeRoutes.slides.edit
    }, {
        title: 'Usuarios',
        icon: PersonRounded,
        path: backOfficeRoutes.user.list
    }, {
        title: 'Miembros',
        icon: PeopleAltRounded,
        path: backOfficeRoutes.member.list
    },
    {
        title: 'Contactos',
        icon: ContactMailRounded,
        path: backOfficeRoutes.contact.list
    }];

    return menu;
};

export const getLoginInit = () => ({
    form: {
        email: '',
        password: ''
    },
    fields: [
        {
            label: 'Email',
            placeholder: 'Email',
            type: 'email',
            id: 'email',
            name: 'email'
        },
        {
            label: 'Contraseña',
            placeholder: 'Contraseña',
            type: 'password',
            id: 'password',
            name: 'password'
        }
    ]
});

export const getSlickHomeSettings = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return settings;
};

export const getSlickSettings = () => {
    const settings = {
        dots: true,
        accesibility: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return settings;
};