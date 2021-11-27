import React from "react";
import { Page, Text, Document, StyleSheet, Font, View, Image } from '@react-pdf/renderer';
// import { stringToHTML } from "./utils";
// import { ELEMENT_TYPES } from "./utils/Types";

export const Resume = ({ state: { layout: { cols } } }) => {
    console.log(cols);

    const newCols = cols.map((col) => {
        const items = col.items.map(item => {
            let tempStr = item.content;

            tempStr = tempStr
                .replaceAll("<div><br /></div>", "[BREAK]<br />[BREAK]")
                .replaceAll("div><div", "div>[BREAK]<div")
                .split("[BREAK]")
                .filter(t => t.length > 0);

            return {
                content: tempStr,
                type: item.type
            };
        });

        return {
            ...col,
            items
        };
    });

    // items.map(item => {
    //     let tempStr = item.content;

    //     tempStr = tempStr
    //         .replaceAll("<div><br /></div>", "[BREAK]<br />[BREAK]")
    //         .replaceAll("div><div", "div>[BREAK]<div")
    //         .split("[BREAK]")
    //         .filter(t => t.length > 0);

    //     return {
    //         content: tempStr,
    //         type: item.type
    //     };

    const html = [];

    // if (newData.length > 0) {
    // html[0] = newData[0][0].content.map((item, i) => {
    //     if (item.includes("<h2>")) {

    //     }
    //     return <Text key={`col-0-${i}`} style={styles.text}>{item}</Text>;
    // });

    // html[1] = newData[0][0].content.map((item, i) => {
    //     return <Text key={`col-1-${i}`} style={styles.text}>{item}</Text>;
    // });
    // }

    console.log(newCols);

    console.log(html);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.sideBar}>
                    <Image src="./avatar.jpg" style={styles.avatar} />
                    {html[0]}
                </View>
                <View style={styles.main}>
                    <View style={{ height: 125, display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <Text style={styles.header}>
                            Your Resume
                        </Text>
                        <Text style={styles.subheading}>
                            Job Title
                        </Text>
                    </View>
                    {html[1]}
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.subheading}>
                        Company - Date
                    </Text>
                    <Text style={styles.text}>
                        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
                        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
                        hacía en el mundo su tardanza, según eran los agravios que pensaba
                        deshacer, tuertos que enderezar.
                    </Text>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.subheading}>
                        Company - Date
                    </Text>
                    <Text style={styles.text}>
                        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
                        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
                        hacía en el mundo su tardanza, según eran los agravios que pensaba
                        deshacer, tuertos que enderezar.
                    </Text>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.subheading}>
                        Company - Date
                    </Text>
                    <Text style={styles.text}>
                        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
                        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
                        hacía en el mundo su tardanza, según eran los agravios que pensaba
                        deshacer, tuertos que enderezar.
                    </Text>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.subheading}>
                        Company - Date
                    </Text>
                    <Text style={styles.text}>
                        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
                        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
                        hacía en el mundo su tardanza, según eran los agravios que pensaba
                        deshacer, tuertos que enderezar.
                    </Text>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.subheading}>
                        Company - Date
                    </Text>
                    <Text style={styles.text}>
                        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
                        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
                        hacía en el mundo su tardanza, según eran los agravios que pensaba
                        deshacer, tuertos que enderezar.
                    </Text>
                    <Text style={styles.title}>
                        Education
                    </Text>
                    <Text style={styles.h2}>Degree Multimedia Computing</Text>
                    <Text style={styles.subheading}>IADT - (2002 - 2008)</Text>

                    <Text style={styles.h2}>Degree Multimedia Computing</Text>
                    <Text style={styles.subheading}>IADT - (2002 - 2008)</Text>
                </View>
            </Page>
        </Document>
    );
}

Font.register({
    family: 'OpenSans',
    fonts: [
        {
            src: `./fonts/OpenSans-Regular.ttf`
        },
        {
            src: `./fonts/OpenSans-Bold.ttf`,
            fontWeight: 'bold'
        },
        {
            src: `./fonts/OpenSans-Italic.ttf`,
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        {
            src: `./fonts/OpenSans-BoldItalic.ttf`,
            fontWeight: 'bold',
            fontStyle: 'italic'
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '20px',
        color: '#000',
        // fontFamily: 'OpenSans'
    },
    sideBar: {
        padding: '20px',
        width: "30%",
        borderRight: 0.5,
        borderRightColor: '#c1c1c1'
    },
    main: {
        padding: '20px',
        width: "70%"
    },
    header: {
        fontSize: 24,
        color: 'lightseagreen',
    },
    h2: {
        marginTop: 10,
        fontSize: 10,
        color: 'lightseagreen',
        fontWeight: 'bold'
    },
    subheading: {
        fontSize: 10,
        color: 'grey',
    },
    text: {
        fontSize: 10,
        lineHeight: 1.3,
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    avatar: {
        borderRadius: 100,
        border: 5,
        borderColor: 'lightseagreen',
        marginBottom: 20,
        height: 125
    }
});