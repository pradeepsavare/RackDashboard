import React from "react";

function Footer() {
  return (
    <footer className="h-8 bg-white border-t border-emerald-200 relative shadow-sm shrink-0">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-sky-600 to-cyan-400"></div>

      {/* Content */}
      <div className="h-full flex items-center justify-center">
        <p className="text-sm tracking-wide text-slate-700">
          © 2026{" "}
          <span className="font-semibold text-emerald-700">
            IESG LABS
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;