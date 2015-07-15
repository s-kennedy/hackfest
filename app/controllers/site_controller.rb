class SiteController < ApplicationController
  def index
    @applicant = Applicant.new
  end

  def file_not_found
  end

end
