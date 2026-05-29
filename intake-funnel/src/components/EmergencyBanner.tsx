export default function EmergencyBanner() {
  return (
    <div className="w-full bg-red-50 text-red-700 text-sm py-2.5 px-6 flex justify-center items-center font-medium border-b border-red-100">
      <span>
        🚨 <strong className="font-bold">Medical Emergency?</strong> Call{" "}
        <a
          href="tel:+918708939028"
          className="underline underline-offset-2 font-bold"
        >
          +91 87089 39028
        </a>{" "}
        immediately for 24/7 priority triage.
      </span>
    </div>
  );
}
