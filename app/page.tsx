export default function HomePage() {
  return (
    <main className="px-4 md:px-32">
      <div className="flex flex-col bg-white px-4 md:px-16 shadow-md">
        <div className="pb-8 pt-4 md:py-16">
          <h1 className="text-2xl md:text-5xl font-title font-black text-brand mb-4">Tree Surgery in Leicester and surrounding areas</h1>
          <p>At Apples to Oaks Tree Care, we provide a excellent range of tree services for domestic and commercial customers. Quotes can be obtained seven days a week, we will personally arrive on site to give advice and recommend possible work to be undertaken without obligation.</p>
        </div>
        <div className="py-8 md:py-16 border-t border-brand">
          <h1 className="text-2xl md:text-5xl font-title font-black text-brand mb-4">Our services include</h1>
          <ul className="list-disc list-inside">
            <li>Tree felling</li>
            <li>Shaping and pruning</li>
            <li>Crown reduction</li>
            <li>Crown thinning</li>
            <li>Removal of dead and dangerous branches</li>
            <li>Hedge trimming</li>
            <li>Garden and site clearance</li>
            <li>Logs, woodchip and mulch supplied</li>
            <li>Stump grinding</li>
            <li>Use of chainsaw training</li>
          </ul>
        </div>
        <div className="pt-8 pb-4 md:py-16 border-t border-brand">
          <h1 className="text-2xl md:text-5xl font-title font-black text-brand mb-4">About the company</h1>
          <p>Apple to Oaks Tree Care is a small business based in Glen Parva, Leicester and managed by Steve Maloy. Steve started his working life in the motor trade but eventually made the leap to the great outdoors and tree surgery. Steve attained his NPTC qualifications at Brooksby College, Melton Mombray and is a member of the International Society of Arboriculture. For more details, find out about us.</p>
        </div>
      </div>
    </main>
  );
}