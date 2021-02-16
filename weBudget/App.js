import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Text style={styles.headText}>Paid</Text>
        <Text style={styles.headText}>Date</Text>
        <Text style={styles.headText}>Title</Text>
        <Text style={styles.headText}>Amount</Text>
      </View>
      <ScrollView>
      {data.map(row => {
        return (
          <View style={styles.rowCard}>
            <Text>{row.paid}</Text>
            <Text>{row.date}</Text>
            <Text>{row.title}</Text>
            <Text>{row.amount}</Text>
          </View>
        )
      })}
      </ScrollView>
    </SafeAreaView>
  );
}

let data=[
  {paid: 'No', date: '02/21/2021', title: 'Medical Bill', amount:'$50'},
  {paid: 'Yes', date: '02/21/2021', title: 'Gas', amount:'$20'},
  {paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
  {paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
  {paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
  {paid: 'No', date: '02/21/2021', title: 'Car Bill', amount:'$350'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  headText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  rowCard: {
    height: 50,
    borderWidth: 2,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  
});

