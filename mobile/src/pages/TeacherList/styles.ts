import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7"
  },

  teacherList: {
    marginTop: -40
  },

  filter: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#9871F5"
  },

  buttonFilter: {
    flexDirection: "row",
    alignItems: 'center'
  },

  textFilter: {
    color: "#D4C2FF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Archivo_400Regular",
    marginLeft: 8
  },

  searchForm: {
    marginBottom: 8
  },

  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular"
  },

  input: {
    height: 54,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },

  submitButtonText: {
    color: "#FFF",
    fontFamily: "Archivo_700Bold",
    fontSize: 16
  },

  messageList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  messageListText: {
    color: '#6A6180',
    textAlign: 'center'
  },

})

export default styles