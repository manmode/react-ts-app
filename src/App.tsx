import List from './components/DemoPage/List/List';
import View from './components/DemoPage/View/View';
function App() {
  return (
    <div className="flex">
      <List className="w-1/5 h-screen p-4"/>
      <View className="w-4/5 h-screen border-l-4 border-blue-400 p-4"/>
    </div>
  );
}

export default App;
