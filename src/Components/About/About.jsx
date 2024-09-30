import React from 'react';
// Import content from aboutContent.js
import { companyOverview, missionStatement, ourValues, ourTeam } from './aboutContent';

function About() {
  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-center">Tentang Kami</h1>
      <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
        
        {/* Company Overview */}
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{companyOverview.title}</h2>
          <p className="leading-relaxed text-gray-700">
            {companyOverview.description}
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{missionStatement.title}</h2>
          <p className="leading-relaxed text-gray-700">
            {missionStatement.description}
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">{ourValues.title}</h2>
          <ul className="pl-6 leading-relaxed text-gray-700 list-disc">
            {ourValues.values.map((value, index) => (
              <li key={index}>
                <strong>{value.heading}:</strong> {value.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="mb-2 text-2xl font-semibold">{ourTeam.title}</h2>
          <p className="leading-relaxed text-gray-700">
            {ourTeam.description}
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
