import { useState } from 'react';
import Tabs from './Tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState('html');

  return <Tabs 
    activeTab={activeTab} 
    setActiveTab={setActiveTab}
    />;
}
