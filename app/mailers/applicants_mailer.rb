class ApplicantsMailer < ApplicationMailer
  default from: 'sharon@ironhack.com'
  def registration_form(applicant)
    @applicant = applicant
    mail(to: 'sharon@ironhack.com', subject: 'Message from the WeCode contact form')
  end
end
