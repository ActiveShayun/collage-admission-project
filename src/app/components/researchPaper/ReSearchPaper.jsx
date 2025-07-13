'use client'
import React from 'react';

const ReSearchPaper = () => {
    return (
        <div>
            <section class="px-4 py-12 bg-gray-100">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
                        Recommended Student Research Papers
                    </h2>

                    {/* <!-- Grid for institutions --> */}
                    <div class="grid md:grid-cols-2 gap-8">

                        {/* <!-- Mymensingh Agricultural University --> */}
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-xl font-semibold text-green-700 mb-4">Mymensingh Agricultural University</h3>
                            <ul class="space-y-3">
                                <li>
                                    <p class="font-medium">"Sustainable Farming Practices in Northern Bangladesh"</p>
                                    <p class="text-sm text-gray-500">By: Jannatul Ferdous</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                                <li>
                                    <p class="font-medium">"Soil Fertility Management in Crop Rotation"</p>
                                    <p class="text-sm text-gray-500">By: Abdur Rahman</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Mymensingh Medical College --> */}
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-xl font-semibold text-red-700 mb-4">Mymensingh Medical College</h3>
                            <ul class="space-y-3">
                                <li>
                                    <p class="font-medium">"Prevalence of Anemia Among Rural Women"</p>
                                    <p class="text-sm text-gray-500">By: Dr. Nazmul Hossain</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                                <li>
                                    <p class="font-medium">"Effectiveness of Early Diagnosis in Cardiac Patients"</p>
                                    <p class="text-sm text-gray-500">By: Dr. Mahjabin Khatun</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- MBA-Bangla, BOU --> */}
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-xl font-semibold text-blue-700 mb-4">MBA - Bangla (BOU)</h3>
                            <ul class="space-y-3">
                                <li>
                                    <p class="font-medium">"E-commerce Adoption in Rural Bangladesh"</p>
                                    <p class="text-sm text-gray-500">By: Tahmina Sultana</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                                <li>
                                    <p class="font-medium">"Customer Trust in Online Transactions"</p>
                                    <p class="text-sm text-gray-500">By: Abdul Alim</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Ananda Mohan College --> */}
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-xl font-semibold text-purple-700 mb-4">Ananda Mohan College</h3>
                            <ul class="space-y-3">
                                <li>
                                    <p class="font-medium">"Women’s Representation in Bengali Literature"</p>
                                    <p class="text-sm text-gray-500">By: Nushrat Jahan</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                                <li>
                                    <p class="font-medium">"Post-Colonial Identity in Tagore’s Work"</p>
                                    <p class="text-sm text-gray-500">By: Sadman Sakib</p>
                                    <a href="#" class="text-blue-600 text-sm hover:underline">Read Paper</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Submission CTA --> */}
                    <div class="mt-12 text-center">
                        <p class="text-gray-600 mb-2">Are you a student from one of these institutions?</p>
                        <a href="#" class="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                            Submit Your Research Paper
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ReSearchPaper;