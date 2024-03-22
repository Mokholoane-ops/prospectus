import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView,ImageBackground} from 'react-native';
import Module from './Module';


export default function App() 
{
 return (
  <ScrollView style={styles.scrollView}>
    <View style={styles.container}>   
          <Image source={require('./lim3.png')} 
          style={styles.head}
          />
       <View>
          <Image
          source={require('./Graphic.png')}
          style={styles.profileImage}
          />
            <Module text= "Graphic Design" label="Graphic design is a profession,academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives."/>
       </View>

       <View style={styles.fashion}>
          <Image
          source={require('./fashion.png')}
          style={styles.profileImage}
          />
             <Module text=" Fashion" label="Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, cosmetics, and jewellery of different cultural aesthetics and their mix and match into outfits that depict distinctive ways of dressing (styles and trends) as signifiers of social status, self-expression, and group belonging."/>
       </View>

       <View style={styles.engineer}>
          <Image
           source={require('./soft.png')}
           style={styles.profileImage}
          />
             <Module text=" Software Engineering"  label="Software engineering is an engineering-based approach to software development."/>
       </View>

       <View style={styles.it}>
           <Image
            source={require('./info.png')}
            style={styles.profileImage}
          />
             <Module text=" Information Technology" label="Information technology (IT) is a set of related fields that encompass computer systems, software, programming languages and data and information processing and storage"/>
       </View>

       <View style={styles.arch}>
           <Image
            source={require('./arch.png')}
            style={styles.profileImage}
          />
             <Module text=" Architecture" label="Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction"/>
           </View>

      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:
   {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontWeight: 'bold',
   },
  profileImage: 
   {
    width: 500,
    height: 250,
   },
  scrollView: 
   {
    backgroundColor: 'pink',
    marginHorizontal: 20,
   },
  head:
   {
    width: 500,
    height: 250,
    marginTop: 100,
   alignSelf:'center'
   }

});
