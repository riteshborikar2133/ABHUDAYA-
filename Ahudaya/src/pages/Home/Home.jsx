import React, { useState } from 'react'
import "./Home.css"
export default function Home() {

    const [formData, setFormData] = useState({
        applicantName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add form submission logic here (e.g., API call)
    };

    return (
        <div className='studentPlatform'>
            <div className="studentform">
                <div>
                    <div className="stuformtitle">
                        <h3>Student Register</h3>
                    </div>
                    <div className="stuformfield">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="applicantName">Applicant Name:</label>
                                <input
                                    type="text"
                                    id="applicantName"
                                    name="applicantName"
                                    value={formData.applicantName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />

                                <button type="submit" className='submitbtn' >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}
