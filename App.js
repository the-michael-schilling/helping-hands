/**
 * HelpingHands
 * https://github.com/the-michael-schilling/
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SectionList,
   StyleSheet,
   StatusBar,
   Button,
   Text,
   View,
   Image,
   SafeAreaView,
   Platform,
   PlatformColor
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    title: 'Finde Paten',
    firstSection: true,
    data: [
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
    ]
  },
  {
    title: 'Finde eine Unterkunft',
    firstSection: false,
    data: [
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
    ]
  },
  {
    title: 'Lerne Deutsch',
    firstSection: false,
    data: [
      {
        id: 'Sprachschule Braunschweig',
        number: '0151 17988128',
        email: 'info@sprachschule-braunschweig.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'Berlitz Language Center',
        number: '0531 125313',
        email: 'info@berlitz.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
      {
        id: 'inlingua Braunschweig',
        number: '0531 70221750',
        email: 'sprachen@inlingua-braunschweig.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
    ]
  },
  {
    title: 'Registriere dich als Flüchtling',
    firstSection: false,
    data: [
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      }
    ]
  },
  {
    title: 'Finde deine Community',
    firstSection: false,
    data: [
      {
        id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      },
    ]
  },
  {
    title: 'Wenn was falsch gelaufen ist...',
    firstSection: false,
    data: [
      { id: 'Beratungsstelle gegen sexualiesierte Gewalt',
        number: '0531 2336666',
        email: 'info@trau-dich-bs.de',
        openMonday: '9.30 – 11.30',
        openTuesday: '9.30 – 11.30',
        openWednesday: '9.30 – 11.30',
        openThursday: '9.30 – 11.30',
        openFriday: '9.30 – 11.30',
      }
    ]
  }
];


const SectionHeader = ({section }) => {
  // if section is first section add image
  const title = section.title;
  const isFirstSection = section.firstSection;


  return (
    <View style={styles.sectionHeader}>
      <Image
        source={require('./ukrainian-flag.png')}
        style={ isFirstSection ? styles.flag : styles.noFlag }
      />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}


const SectionFooter = ({section}) => {
  return (
    <View style={styles.sectionFooter}>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: '#dcdcdc'
        }}
      />
    </View>
  );
}


const Contact = ({item}) => {

  const [isOpen, setIsOpen] = useState(true);
  const name = item.id;
  // Hello, I am { name }, and I am {isOpen ? "open" : "closed"}!!
  return (
    <View style={styles.contactSection}>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: '#dcdcdc'
        }}
      />

      <Text style={[ styles.contactDescription ]}>
        { name } {isOpen ? "open" : "closed"}
        
      </Text>

      <View style={styles.buttonContainer}>
        <Icon.Button
          name= { isOpen ? "call-outline" : "alarm-sharp" }
          onPress={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          backgroundColor={ Platform.select({
            ios:
              isOpen ? PlatformColor('systemBlue')
                        : PlatformColor('systemGreen'),
            backgroundColor:
              isOpen ? PlatformColor('@android:color/holo_blue_bright')
                        : PlatformColor('@android:color/holo_blue_bright'),
            default:
              isOpen ? 'blue' : 'green',
          })}

        >
          <Text style={styles.buttonText}>
            { isOpen ? "Anrufen" : "Erinner mich" }
          </Text>
        </Icon.Button>
      </View>
    </View>
  );
}


const App = () => {

  const backgroundStyle = { backgroundColor: 'rgba(247,247,247,1.0)' };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar/>

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
        renderItem= {({ item }) => <Contact item={item} />}
        renderSectionFooter={({ section }) => <SectionFooter section={section} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 24,
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  flag: {
    height: 300,
    flexDirection: "row",
    alignSelf: "center"
  },
  noFlag: {
    height: 0,
    flexDirection: "row",
    alignSelf: "center"
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionFooter: {
    paddingHorizontal: 24,
  },
  contactSection: {
    paddingHorizontal: 24,
  },
  contactDescription: {
    marginTop: 12,
    fontSize: 18,
    // fontWeight: '400',
  },
  buttonContainer: {
    marginTop: 12,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 2,
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
