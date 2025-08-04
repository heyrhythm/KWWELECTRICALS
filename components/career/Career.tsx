import React from 'react'
import WhyWorkWithUs from './WhyWorkWithUs'
import CareerHeader from './CareerHeader'
import CompanyValues from './CompanyValues'
import EmployeeBenefits from './EmployeeBenefits'
import JobOpeningsSection from './JobOpeningsSection'
import JobApplicationForm from './JobApplicationForm'

const Career = () => {
  return (
    <div>
        <CareerHeader />
        <WhyWorkWithUs/>
        <CompanyValues />
        <EmployeeBenefits/>
        <JobOpeningsSection />
        <JobApplicationForm />
    </div>
  )
}

export default Career