class ContactsMailer < ApplicationMailer
  default from: 'sharon@ironhack.com'
  def contact_form(contact)
    @contact = contact
    mail(to: 'sharon@ironhack.com', subject: 'Message from the Hackfest contact form')
  end
end
