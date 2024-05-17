var config = {
    style: 'mapbox://styles/labtecnosocial/clw9hbhnk00yo01qg54txefxl',
    accessToken: 'pk.eyJ1IjoibGFidGVjbm9zb2NpYWwiLCJhIjoiY2x3YXBoZHRuMGNjeTJxbDlsYzR6YTZvbSJ9.W3NtaACZrCZY7G4Zb9qjbg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            description: 'Este mapa muestra la velocidad de descarga de internet fijo en Bolivia. Y, aunque en general la población ya está conectada, podemos observar desigualdades espaciales de este servicio en nuestro país.',
            location: {
                center: [-65.89659, -16.29181],
                zoom: 7.1,
                pitch: 45.0,
                bearing: -9.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'card-1',
            alignment: 'left',
            hidden: false,
            title: 'La Paz',
            description: 'En La Paz hay una diferencia marcada de velocidad entre los municipio de La Paz y El Alto. También podemos ver que la zona con mejor internet y velocidad de descarga es la zona sur, donde vive gente con mayores recursos económicos, en barrios consolidados y privilegiados.',
            location: {
                center: [-68.15098, -16.47928],
                zoom: 9.0,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Cochabamba',
            alignment: 'left',
            hidden: false,
            title: 'Cochabamba',
            description: 'En el área metropolitana de Cochabamba podemos ver que las zonas centrales tienen mayor velocidad de internet que las periferias, donde la población vive en condiciones precarias y con menos recursos. La diferencia entre el norte y el sur de de Cochabamba es muy grande.',
            location: {
                center: [-66.16441, -17.38932],
                zoom: 9.0,
                pitch: 45.0,
                bearing: -24.07
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Santa Cruz',
            alignment: 'left',
            hidden: false,
            title: 'Santa Cruz',
            description: 'En Santa Cruz está el mismo patrón espacial. Existe una zona central consolidada, con gente económicamente pudiente que puede costearse mejores servicios de internet, en comparación a las zonas periféricas donde el internet es más lento y no se cuenta con la infraestructura de telecomunicaciones suficiente.',
            location: {
                center: [-63.18777, -17.78555],
                zoom: 9.0,
                pitch: 45.0,
                bearing: -24.07
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            description: 'El mapa nos muestra que existen brechas espaciales de calidad del acceso. La velocidad de internet es mejor en los centros que en las periferias, al igual que la distribución espacial de otros servicios básicos.',
            location: {
                center: [-65.89659, -16.29181],
                zoom: 7.1,
                pitch: 45.0,
                bearing: -9.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
