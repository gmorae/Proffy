import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingBottom: 50,
    backgroundColor: "#8357E5",
  },

  containerTextIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  topBar: {
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#6842C2',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#774DD6",

  },

  titlePage: {
    fontFamily: "Archivo_500Medium",
    color: "#D4C2FF",
    fontSize: 14,
    lineHeight: 15
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  },

  contentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  titleIcon: {
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 18
  },
})

export default styles