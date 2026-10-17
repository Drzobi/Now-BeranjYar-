import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation, TabType } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { CalculatorComponent } from './components/Calculator';
import { DiagnosticLab } from './components/DiagnosticLab';
import { StagesGuide } from './components/StagesGuide';
import { VarietiesCatalog } from './components/VarietiesCatalog';
import { WaterManager } from './components/WaterManager';
import { MarketConverter } from './components/MarketConverter';
import { FarmNotes } from './components/FarmNotes';
import { Footer } from './components/Footer';
import { Language, FarmRecord } from './types';

export function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [currentTab, setCurrentTab] = useState<TabType>('dashboard');
  const [pendingRecord, setPendingRecord] = useState<FarmRecord | null>(null);

  // Sync document direction and language attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const handleSelectTab = (tab: TabType | string) => {
    setCurrentTab(tab as TabType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveToNotes = (record: FarmRecord) => {
    setPendingRecord(record);
    // automatically switch to notes tab to show feedback
    setCurrentTab('notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100/70 text-stone-900">
      {/* Top Header */}
      <Header 
        lang={lang} 
        onToggleLang={handleToggleLang} 
        onSelectTab={handleSelectTab} 
      />

      {/* Main Navigation Bar */}
      <Navigation 
        currentTab={currentTab} 
        onSelectTab={handleSelectTab} 
        lang={lang} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'dashboard' && (
          <Dashboard lang={lang} onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'calculator' && (
          <CalculatorComponent lang={lang} onSaveToNotes={handleSaveToNotes} />
        )}

        {currentTab === 'diagnostic' && (
          <DiagnosticLab lang={lang} />
        )}

        {currentTab === 'stages' && (
          <StagesGuide lang={lang} />
        )}

        {currentTab === 'varieties' && (
          <VarietiesCatalog lang={lang} />
        )}

        {currentTab === 'water' && (
          <WaterManager lang={lang} />
        )}

        {currentTab === 'market' && (
          <MarketConverter lang={lang} />
        )}

        {currentTab === 'notes' && (
          <FarmNotes lang={lang} externalRecord={pendingRecord} />
        )}
      </main>

      {/* Footer */}
      <Footer lang={lang} onSelectTab={handleSelectTab} />
    </div>
  );
}

export default App;
