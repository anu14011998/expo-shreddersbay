
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Platform, Image, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// const imgrul = "https://shreddersbay.com/API/uploads"


// const T2Screen1 = ({ navigation }) => {
//   const [userDataLOCAL_STORAGE, setLocalUserData] = useState<{ [key: string]: any } | null>(null);
//   const [userId, setUserId] = useState('');
//   const url = 'https://shreddersbay.com/API/cart_api.php?action=select_id&user_id=';
//   const [data, setData] = useState<any>(''); // Change the type according to your expected data

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem('UserCred');
//       if (storedData !== null) {
//         const parsedData = JSON.parse(storedData);
//         setLocalUserData(parsedData);
//         extractId(parsedData);
//       } else {
//         console.log('No data found in AsyncStorage');
//       }
//     } catch (error) {
//       console.error('Error retrieving data:', error);
//     }
//   };

//   const extractId = (data: { [key: string]: any } | null) => {
//     if (data && data['0']) {
//       const id = data['0'].id;
//       setUserId(id);
//       fetchApiData(id);
//     } else {
//       console.log('ID not found in the parsed data');
//     }
//   };

//   const fetchApiData = async (userId: string) => {
//     try {
//       const response = await fetch(`${url}${userId}`);
//       if (response.ok) {
//         const result = await response.json();
//         setData(result);
//         console.log('Fetched Data:', result);
//       } else {
//         console.error('Failed to fetch data from API');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   const deleteItem = async (userId: string, itemId: string) => {
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     Alert.alert(
//       'Delete Confirmation',
//       'Are you sure you want to delete?',
//       [
//         {
//           text: 'No',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'Yes',
//           onPress: async () => {
//             // Place your delete logic here
//             console.log('Yes Pressed');
//             try {
//               const deleteUrl = `https://shreddersbay.com/API/cart_api.php?action=delete&user_id=${userId}&cart_id=${itemId}`;
//               const response = await fetch(deleteUrl, {
//                 method: 'DELETE',
//                 // Add necessary headers or body if required by your API
//               });
        
//               if (response.ok) {
//                 // Assuming successful deletion, you can update the UI or perform any action needed
//                 console.log(`Item ${itemId} deleted successfully`);
//                 // Refresh data after deletion if needed
//                 fetchApiData(userId);
//               } else {
//                 console.error('Failed to delete item');
//               }
//             } catch (error) {
//               console.error('Error deleting item:', error);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
    
//   };
//   const getTotalWeight = () => {
//     if (!data || data.length === 0) {
//       return 0; // If there is no data or it's an empty array, return 0
//     }

//     const total = data.reduce((accumulator, item) => {
//       return accumulator + parseFloat(item.total_price);
//     }, 0);

//     return total;
//   };


//   return (
//     <View style={styles.container}>

//       {/* <Button title='goto address screen'onPress={()=>{navigation.navigate("T2Screen2")}}/> */}

//       <ScrollView >
//         {data ? (
//           data.map((item: any,index:number) => (
//             <View key={index} style={styles.card}>


//               <View style={styles.imageContainer}>
//                 <Image source={{ uri: `${imgrul}/${item.filename}` }} style={styles.cartimage} />
//               </View>

//               <View style={styles.textContainer}>
//                 {/* <Text>{item.cart_id}</Text> */}
//                 <Text style=
//                   {{
//                     color: '#ff3300',
//                     fontSize: 14,
//                     fontWeight: '500',

//                   }}
//                 >
//                   <Text style={{
//                     fontSize: 14,
//                     fontWeight: '500',
//                     color: 'black',
//                     textShadowColor: 'lightgray',
//                     textShadowOffset: { width: 3, height: 2 },
//                     textShadowRadius: 5,
//                     marginBottom: 10, // Add spacing between text and other elements if needed
//                   }}
//                   >Product_Name: </Text> {item.p_name}
//                 </Text>
//                 <Text
//                   style=
//                   {{
//                     color: '#ff3300',
//                     fontSize: 14,
//                     fontWeight: '500',
//                   }} >
//                   <Text style={{
//                     fontSize: 14,
//                     fontWeight: '500',
//                     color: 'black',
//                     textShadowColor: 'lightgray',
//                     textShadowOffset: { width: 3, height: 2 },
//                     textShadowRadius: 5,
//                     marginBottom: 10, // Add spacing between text and other elements if needed
//                   }}
//                   >Product_weight: </Text> {item.total_weight}kg
//                 </Text>
//                 <Text
//                   style=
//                   {{
//                     color: '#ff3300',
//                     fontSize: 14,
//                     fontWeight: '500',
//                   }}>
//                   <Text style={{
//                     fontSize: 14,
//                     fontWeight: '500',
//                     color: 'black',
//                     textShadowColor: 'lightgray',
//                     textShadowOffset: { width: 3, height: 2 },
//                     textShadowRadius: 5,
//                     marginBottom: 10, // Add spacing between text and other elements if needed
//                   }}
//                   >Product_price: </Text> {item.total_price}
//                 </Text>

//               </View>

//               <View style={styles.deleteIconContainer}>

//                 <MaterialIcons name='delete-forever'
//                   style=
//                   {{
//                     fontSize: 40,
//                   }}
//                   onPress={() => deleteItem(userId, item.cart_id)} />
//                 {/* <Button title='delete'
//                   // Call deleteItem with userId and item's p_id

//                 /> */}
//               </View>
//             </View>
//           ))
//         ) : (
//           <Text>No data fetched yet</Text>
//         )}
//       </ScrollView>

//       <View style={styles.bottomButton}>
//         <View
//           style=
//           {{
//             borderBottomWidth: 1,
//             borderTopWidth: 1,
//             borderBottomColor: 'lightgray',
//             borderTopColor: 'lightgray',
//           }}
//         >
//           <Text style=
//             {{
//               color: '#ff66cc',
//               fontSize: 16,
//               fontWeight: '500',

//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 17,
//                 fontWeight: '500',
//                 color: 'black',
//                 textShadowColor: 'lightgray',
//                 textShadowOffset: { width: 3, height: 2 },
//                 textShadowRadius: 5,
//                 marginBottom: 10, // Add spacing between text and other elements if needed
//               }}
//             >aproximate price of the cart is :- </Text>{getTotalWeight()}
//           </Text>

//         </View>

//         <View  >
//           <UpcomingDate navigation={navigation } Data={data} />
//         </View>


//       </View>


//     </View>
//   );
// };


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Platform, Image, Alert, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { chosenDateTimeAction, myScrapDetailsAction } from '../.././redux/actions/myScrapDetailsAction';
const imgrul = "https://shreddersbay.com/API/uploads"


const T2Screen1 = ({navigation}) => {
  const [userDataLOCAL_STORAGE, setLocalUserData] = useState<{ [key: string]: any } | null>(null);
  const [userId, setUserId] = useState('');
  const url = 'https://shreddersbay.com/API/cart_api.php?action=select_id&user_id=';
  const [data, setData] = useState<any>(''); // Change the type according to your expected data

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('UserCred');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        setLocalUserData(parsedData);
        extractId(parsedData);
      } else {
        console.log('No data found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const extractId = (data: { [key: string]: any } | null) => {
    if (data && data['0']) {
      const id = data['0'].id;
      setUserId(id);
      fetchApiData(id);
    } else {
      console.log('ID not found in the parsed data');
    }
  };

  const fetchApiData = async (userId: string) => {
    try {
      const response = await fetch(`${url}${userId}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        console.log('Fetched Data:', result);
      } else {
        console.error('Failed to fetch data from API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleteItem = async (userId: string, itemId: string) => {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            // Place your delete logic here
            console.log('Yes Pressed');
            try {
              const deleteUrl = `https://shreddersbay.com/API/cart_api.php?action=delete&user_id=${userId}&cart_id=${itemId}`;
              const response = await fetch(deleteUrl, {
                method: 'DELETE',
                // Add necessary headers or body if required by your API
              });
        
              if (response.ok) {
                // Assuming successful deletion, you can update the UI or perform any action needed
                console.log(`Item ${itemId} deleted successfully`);
                // Refresh data after deletion if needed
                fetchApiData(userId);
              } else {
                console.error('Failed to delete item');
              }
            } catch (error) {
              console.error('Error deleting item:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
    
  };
  const getTotalWeight = () => {
    if (!data || data.length === 0) {
      return 0; // If there is no data or it's an empty array, return 0
    }

    const total = data.reduce((accumulator:any, item:any) => {
      return accumulator + parseFloat(item.total_price);
    }, 0);

    return total;
  };
const [refreshing,setRefreshing]=useState(false)
const onRefresh=()=>{
  fetchUserData();
  fetchApiData(userId)
}
// refreshControl={
//   <RefreshControl
//     refreshing={refreshing}
//     onRefresh={onRefresh}
//     colors={['#0000ff']}
//     tintColor="#0000ff"
//   />
// }


  return (
    <View style={styles.container}>

      {/* <Button title='goto address screen'onPress={()=>{navigation.navigate("T2Screen2")}}/> */}
     
      <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#0000ff']}
          tintColor="#0000ff"
        />
      }
      >
        {data ? (
          data.map((item: any) => (
            <View key={item.cart_id} style={styles.card}>


              <View style={styles.imageContainer}>
                <Image source={{ uri: `${imgrul}/${item.filename}` }} style={styles.cartimage} />
              </View>

              <View style={styles.textContainer}>
                {/* <Text>{item.cart_id}</Text> */}
                <Text style=
                  {{
                    color: '#ff3300',
                    fontSize: 14,
                    fontWeight: '500',

                  }}
                >
                  <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                    textShadowColor: 'lightgray',
                    textShadowOffset: { width: 3, height: 2 },
                    textShadowRadius: 5,
                    marginBottom: 10, // Add spacing between text and other elements if needed
                  }}
                  >Product_Name: </Text> {item.p_name}
                </Text>
                <Text
                  style=
                  {{
                    color: '#ff3300',
                    fontSize: 14,
                    fontWeight: '500',
                  }} >
                  <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                    textShadowColor: 'lightgray',
                    textShadowOffset: { width: 3, height: 2 },
                    textShadowRadius: 5,
                    marginBottom: 10, // Add spacing between text and other elements if needed
                  }}
                  >Product_weight: </Text> {item.total_weight}kg
                </Text>
                <Text
                  style=
                  {{
                    color: '#ff3300',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'black',
                    textShadowColor: 'lightgray',
                    textShadowOffset: { width: 3, height: 2 },
                    textShadowRadius: 5,
                    marginBottom: 10, // Add spacing between text and other elements if needed
                  }}
                  >Product_price: </Text> {item.total_price}
                </Text>

              </View>


              <View style={styles.deleteIconContainer}>

                <MaterialIcons name='delete-forever'
                  style=
                  {{
                    fontSize: 40,
                  }}
                  onPress={() => deleteItem(userId, item.cart_id)} />
                {/* <Button title='delete'
                  // Call deleteItem with userId and item's p_id

                /> */}
              </View>
            </View>
          ))
        ) : (
          <Text>No data fetched yet</Text>
        )}
      </ScrollView>

      <View style={styles.bottomButton}>
        <View
          style=
          {{
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderBottomColor: 'lightgray',
            borderTopColor: 'lightgray',
          }}
        >
          <Text style=
            {{
              color: '#ff66cc',
              fontSize: 16,
              fontWeight: '500',

            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
                color: 'black',
                textShadowColor: 'lightgray',
                textShadowOffset: { width: 3, height: 2 },
                textShadowRadius: 5,
                marginBottom: 10, // Add spacing between text and other elements if needed
              }}
            >aproximate price of the cart is :- </Text>{getTotalWeight()}
          </Text>

        </View>

        <View  >
          <UpcomingDate  data={data} navigation={navigation}/>
        </View>


      </View>


    </View>
  );
};


const styles = StyleSheet.create({

  

  imageContainer: {
    flex: 0.7, // Equal width for image container
    marginRight: 10, // Adjust margin as needed
  },
  textContainer: {
    flex: 2, // Equal width for text container
  },
  deleteIconContainer: {
    flex: 0.5, // Equal width for delete icon container
    alignItems: 'center',
  },


  delete: {

    color: '#fff',

  },

  cartimage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'black',

  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 8,
  },
  // scrollView: {
  //   flex: 1,
  // },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0.8,
    borderColor: 'gray',

  },



  bottomButton: {
    backgroundColor: 'white', // Adjust as needed
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 0,
    borderRadius: 5,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});






type UpcomingDateProps = {
  data: any;
  navigation: any; // Adjust the type to match your data type
};

const UpcomingDate: React.FC<UpcomingDateProps> = ({ data, navigation }) => {
  // const navigation = useNavigation<NavigationProp<Stack2ParamList>>();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // Calculate today's date
  const today = new Date();

  const onDateChange = (event:any, selected:any) => {
    const currentDate = selected || selectedDate;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const formatDate = (date:any) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    return formattedDate;
  };
  const dispatch = useDispatch();


  const handleContinue = () => {
    const formattedDate = formatDate(selectedDate); ///formattedDate is current date 
    // console.log(`API call for date: ${formattedDate}`);
    // console.log(`userId is ${user_id}`);
    const currentDateTime = new Date().getTime(); // Current date and time in milliseconds
    const selectedDateTime = new Date(selectedDate).getTime(); // Selected date and time in milliseconds
    if (selectedDateTime >= currentDateTime) {
      // console.log(`API call for date: ${formattedDate}`);
      // console.log(`userId is ${user_id}`);
      // Perform action since the selected date and time is valid (after or equal to current date and time)
      dispatch(myScrapDetailsAction(data));
      
      dispatch(chosenDateTimeAction(selectedDate.toString()));


      console.log("i want to check data and choosen date----->",data,selectedDate);
      
      navigation.navigate('T2Screen2')

    } else {
      Alert.alert('Please choose a date and time after the current date and time.');
      // Handle the case when the selected date and time is earlier than the current date and time
      // This could be showing an error message or prompting the user to select a valid date/time
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style=
        {{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          marginBottom: 10,
          borderBottomColor: 'lightgray',
          borderTopColor: 'lightgray',
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            color: 'black',
            textShadowColor: 'lightgray',
            textShadowOffset: { width: 3, height: 2 },
            textShadowRadius: 5,
            marginBottom: 10,

            // Add spacing between text and other elements if needed
          }}
        >
          Selected Date:- {formatDate(selectedDate)}
          <View>
            <FontAwesome name="calendar"
              style=
              {{
                fontSize: 20,
                color: '#ff66cc',
                marginLeft: 10,
                marginRight: 20,
                marginTop: 5,

              }}
              onPress={() => setShowPicker(true)}
            />
          </View>
        </Text>


      </View>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          minimumDate={today} // Set minimum date to today's date
          onChange={onDateChange}
        />
      )}

      <TouchableOpacity
        onPress={()=>{handleContinue()}}
        style=
        {{
          marginBottom: 10,
          borderWidth: 0.8,
          padding: 8,
          borderRadius: 8,
          borderColor: '#801a00',
          backgroundColor: '#801a00',
          width: '100%'


        }}
      >
        <Text
          style=
          {{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>

    </View>
  );
};
export default T2Screen1;
