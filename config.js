var config = {
    style: 'mapbox://styles/sfduncan/cm404rfe100m801qqftvbfesq',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic2ZkdW5jYW4iLCJhIjoiY2x2Z3QybHh2MHlwcTJpczJyejAyYWVpNyJ9.DLToR14vGnafkx-pCGj6KA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Yurok Indian Reservation',
            image: './assets/YurokTribe.jpg',
            description: '<b>About:</b> The Yurok Tribe is the largest Native American tribe in California, both in terms of population and land area. The reservation is located along the Klamath River in Northern California. Historically, the tribe has faced significant challenges in accessing reliable internet services, with some areas lacking even basic cell reception. Recognizing the critical need for connectivity, especially highlighted during the COVID-19 pandemic, the tribe has undertaken initiatives to improve broadband access for its members.<br><b>Funding Received:</b> Awarded $61,661,365.50 from the NTIA\'s Tribal Broadband Connectivity Program to enhance broadband infrastructure on the reservation.<br><b>Number of Households Served:</b> The project aims to connect 921 unserved Native American households on the Yurok Reservation and ancestral lands with high-speed internet services',
            location: {
                center: [-123.74, 41.36],
                zoom: 9.71,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'thisislines-40jnwu', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'thisislines-40jnwu', opacity: 0 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Hoopa Valley Indian Reservation',
            image: './assets/HoopaValley.png',
            description: '<b>About:</b> The Hoopa Valley Tribe is a federally recognized Native American tribe located in Northern California. The reservation spans approximately 92,000 acres and is characterized by its rural and mountainous terrain, which has historically posed challenges for infrastructure development, including broadband connectivity. To address the digital divide, the tribe established Acorn Wireless, a tribally owned and operated internet service provider, aiming to enhance internet access for its members.<br><b>Funding Received:</b> Awarded $65,140,407.72 through the Tribal Broadband Connectivity Program (TBCP) administered by the National Telecommunications and Information Administration (NTIA).<br><b>Number of Households Served:</b> The broadband infrastructure project is designed to directly connect 1,045 unserved Native American households on the reservation.',
            location: {
                center: [-123.60, 41.100],
                zoom: 10.62,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: .5, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'thisislines-40jnwu', opacity: 0 } // Keep this layer hidden
            ],
            onChapterExit: [
                { layer: 'thisislines-40jnwu', opacity: 0 } // Ensure it remains hidden
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tule River Indian Reservation',
            image: './assets/TuleRiver.jpg',
            description: '<b>About:</b> The Tule River Indian Tribe is a federally recognized tribe located in the foothills of the Sierra Nevada Mountains in California. The reservation encompasses approximately 85 square miles and is home to the tribe\'s members. The community has faced challenges related to limited broadband access, impacting education, healthcare, and economic opportunities.<br><b>Funding Received:</b> Awarded $500,000 through the NTIA\'s Tribal Broadband Connectivity Program.<br><b>Number of Households Served:</b> The funding is designated to expand an existing fiber network directly to 15 unserved Tribal households and 4 unserved Tribal community anchor institutions, providing high-speed reliable internet access at a minimum of 100/20 Mbps.',
            location: {
                center: [-118.65, 36.040],
                zoom: 11.17,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'thisislines-40jnwu', opacity: 0 } // Keep this layer hidden
            ],
            onChapterExit: [
                { layer: 'thisislines-40jnwu', opacity: 0 } // Ensure it remains hidden
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Imagining a Tribal Mesh Network',
            description: 'A tribal mesh network across California could revolutionize broadband access for Indigenous communities by creating a decentralized and resilient system of connectivity. Mesh networks rely on interconnected nodes—tribal offices, community centers, and homes—to transmit data efficiently, even in areas with limited infrastructure. This approach would allow tribal communities to bypass reliance on traditional internet service providers, enabling self-determination over digital infrastructure. By linking tribal lands, underserved areas, and key middle-mile connections, such a network could bridge the digital divide, foster economic development, and enhance access to critical services like telehealth, education, and governance.',
            location: {
                center: [-116, 37.5],
                zoom: 5.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'thisislines-40jnwu', opacity: 1 } // Turn the layer on
            ],
            onChapterExit: [] // No further action needed
        }
    ]
};
