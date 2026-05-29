"use client";

export type Lead = {
  id: string;
  name: string;
  symptom: string;
  contact: string;
  time: string;
  status: "New" | "Contacted" | "Booked";
};

export default function CrmDashboardMock({ leads }: { leads: Lead[] }) {
  return (
    <div className="w-full h-[600px] bg-slate-900 border-[6px] border-slate-700 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative font-sans">
      {/* Top Header */}
      <div className="bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="font-bold text-white tracking-tight">Earthly CRM</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300">Live AI Routing</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-900/50 space-y-4">
        {leads.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
            <svg className="w-12 h-12 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            <p>Waiting for inbound patient requests...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead, idx) => (
              <div 
                key={lead.id} 
                className={`p-4 rounded-xl border transition-all duration-500 ease-out transform ${
                  idx === 0 
                    ? "bg-slate-800 border-primary/50 shadow-[0_0_15px_rgba(56,189,248,0.15)] animate-in slide-in-from-top-4 fade-in zoom-in-95" 
                    : "bg-slate-800/40 border-slate-700"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-100">{lead.name}</h4>
                    {idx === 0 && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary uppercase tracking-wider">New</span>}
                  </div>
                  <span className="text-xs font-medium text-slate-400">{lead.time}</span>
                </div>
                
                <p className="text-sm text-slate-300 mb-3"><span className="text-slate-500 font-medium mr-1">Symptom:</span>{lead.symptom}</p>
                
                <div className="flex justify-between items-center pt-3 border-t border-slate-700/50">
                  <span className="text-xs font-mono text-slate-500">{lead.contact}</span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Pending Action</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative Gradient overlay for bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
}
