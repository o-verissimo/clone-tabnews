import React, { useState, useEffect } from 'react';
import { Check, ChevronRight, BookOpen, Heart, Activity, Code, Moon, Sun, Monitor, Shield, Coffee, Gamepad2 } from 'lucide-react';

const NotionPlanner = () => {
  const [activeTab, setActiveTab] = useState('week');
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('userHabits');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('userHabits', JSON.stringify(habits));
  }, [habits]);

  const toggleHabit = (day, habit) => {
    const key = `${day}-${habit}`;
    setHabits(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const schedule = {
    "Segunda": [
      { time: "06:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "09:00", task: "Trabalho", type: "work", icon: <Monitor size={14} /> },
      { time: "18:00", task: "Academia", type: "health", icon: <Activity size={14} /> },
      { time: "20:30", task: "Estudo: Filipe Deschamps", type: "study", icon: <Code size={14} /> },
      { time: "22:30", task: "Jejum / Dormir", type: "rest", icon: <Moon size={14} /> },
    ],
    "Terça": [
      { time: "06:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "09:00", task: "Trabalho", type: "work", icon: <Monitor size={14} /> },
      { time: "18:00", task: "Academia", type: "health", icon: <Activity size={14} /> },
      { time: "20:30", task: "Estudo: Filipe Deschamps", type: "study", icon: <Code size={14} /> },
      { time: "22:30", task: "Jejum / Dormir", type: "rest", icon: <Moon size={14} /> },
    ],
    "Quarta": [
      { time: "06:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "09:00", task: "Trabalho", type: "work", icon: <Monitor size={14} /> },
      { time: "18:00", task: "Namorada / Lazer", type: "love", icon: <Heart size={14} /> },
      { time: "20:30", task: "Estudo: Filipe Deschamps", type: "study", icon: <Code size={14} /> },
      { time: "22:30", task: "Relax", type: "rest", icon: <Moon size={14} /> },
    ],
    "Quinta": [
      { time: "06:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "09:00", task: "Trabalho", type: "work", icon: <Monitor size={14} /> },
      { time: "18:00", task: "Academia", type: "health", icon: <Activity size={14} /> },
      { time: "20:30", task: "Estudo: Python (Scripts)", type: "study", icon: <Code size={14} /> },
      { time: "22:30", task: "Jejum / Dormir", type: "rest", icon: <Moon size={14} /> },
    ],
    "Sexta": [
      { time: "06:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "09:00", task: "Trabalho", type: "work", icon: <Monitor size={14} /> },
      { time: "18:00", task: "Academia", type: "health", icon: <Activity size={14} /> },
      { time: "20:30", task: "Namoro / Livre", type: "love", icon: <Heart size={14} /> },
      { time: "00:00", task: "Dormir", type: "rest", icon: <Moon size={14} /> },
    ],
    "Sábado": [
      { time: "07:00", task: "Devocional", type: "spirit", icon: <BookOpen size={14} /> },
      { time: "11:30", task: "Ensaio (Até 13h)", type: "spirit", icon: <Activity size={14} /> },
      { time: "14:00", task: "💀 Hacker Lab (Kali Linux)", type: "study", icon: <Shield size={14} /> },
      { time: "19:00", task: "Culto de Ceia (2º Sáb) / Livre", type: "spirit", icon: <BookOpen size={14} /> },
    ],
    "Domingo": [
      { time: "09:00", task: "Igreja (Manhã)", type: "spirit", icon: <Sun size={14} /> },
      { time: "13:00", task: "Almoço em Família", type: "love", icon: <Heart size={14} /> },
      { time: "17:00", task: "Igreja (Noite)", type: "spirit", icon: <Moon size={14} /> },
      { time: "21:30", task: "Games Analíticos", type: "fun", icon: <Gamepad2 size={14} /> },
    ]
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'work': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'spirit': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'health': return 'bg-green-100 text-green-700 border-green-200';
      case 'study': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'love': return 'bg-pink-100 text-pink-700 border-pink-200';
      case 'fun': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#37352F] font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden min-h-[80vh] flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#F7F6F3] p-6 border-r border-gray-200 flex flex-col gap-6">
          
          {/* Header Profile */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-xl">👨‍💻</div>
            <div>
              <h2 className="font-semibold text-sm">Meu Planner</h2>
              <p className="text-xs text-gray-500">Protocolo Híbrido</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-1">
            <button 
              onClick={() => setActiveTab('week')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${activeTab === 'week' ? 'bg-[#E3E2E0] font-medium' : 'hover:bg-[#EAE9E8]'}`}
            >
              <Monitor size={16} /> Cronograma Semanal
            </button>
            <button 
              onClick={() => setActiveTab('habits')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm ${activeTab === 'habits' ? 'bg-[#E3E2E0] font-medium' : 'hover:bg-[#EAE9E8]'}`}
            >
              <Activity size={16} /> Hábitos & Metas
            </button>
          </div>

          {/* Quick Notes / Callout */}
          <div className="bg-white p-4 rounded border border-gray-200 shadow-sm mt-auto">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
              <Shield size={12}/> Foco Atual
            </h3>
            <p className="text-sm mb-2"><strong>Mês 1-2:</strong> Base Sólida</p>
            <ul className="text-xs space-y-1 text-gray-600 list-disc pl-4">
              <li>Filipe Deschamps (HTTP/Git)</li>
              <li>Python Scripting</li>
              <li>Setup Kali Linux</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          
          {/* Banner Image Area */}
          <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg mb-8 relative overflow-hidden flex items-center justify-center">
            <div className="text-white opacity-20 text-6xl font-mono">{`{ code: "security" }`}</div>
          </div>

          {activeTab === 'week' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🗓️</span> Visão Semanal
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Object.entries(schedule).map(([day, events]) => (
                  <div key={day} className="flex flex-col gap-2">
                    <h3 className="font-semibold text-sm px-2 py-1 bg-[#F1F0EF] rounded w-fit text-gray-600">
                      {day}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {events.map((event, idx) => (
                        <div key={idx} className="group flex items-start gap-3 p-3 rounded hover:bg-[#F7F6F3] transition-colors border border-transparent hover:border-gray-200">
                          <div className="mt-1 text-gray-400">{event.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[10px] px-1.5 rounded border ${getBadgeColor(event.type)}`}>
                                {event.time}
                              </span>
                            </div>
                            <p className="text-sm font-medium text-gray-800">{event.task}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'habits' && (
            <div className="space-y-6">
               <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">✅</span> Rastreador de Hábitos
              </h1>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 bg-[#F7F6F3] border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 font-medium">Hábito</th>
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map(d => (
                        <th key={d} className="px-4 py-3 font-medium text-center w-12">{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: "Devocional (1h)", icon: "🙏" },
                      { name: "Jejum Intermitente", icon: "🍽️" },
                      { name: "Academia / Treino", icon: "💪" },
                      { name: "Estudo: Engenharia", icon: "🏗️" },
                      { name: "Estudo: Hacking", icon: "💀" },
                      { name: "Tempo com Namorada", icon: "❤️" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium flex items-center gap-2">
                          <span>{row.icon}</span> {row.name}
                        </td>
                        {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => {
                          const isChecked = habits[`${day}-${row.name}`];
                          return (
                            <td key={day} className="px-4 py-3 text-center">
                              <button
                                onClick={() => toggleHabit(day, row.name)}
                                className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                                  isChecked 
                                    ? 'bg-blue-500 border-blue-600 text-white' 
                                    : 'bg-white border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800">
                <strong>💡 Dica do Protocolo:</strong> Marque os dias conforme você cumpre. A consistência visual ajuda a manter o foco, especialmente nos dias que você sentir cansaço (como nas quintas-feiras de Python).
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default NotionPlanner;