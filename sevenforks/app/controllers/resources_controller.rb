class ResourcesController < ApplicationController
# replace Resource
# replace resource
def index
  @resources = Resource.all
end

def show
  @resource = Resource.find(params[:id])
end

def new
  @resource = Resource.new
end

def create
  @resource = Resource.create(resource_params)

  redirect_to resource_path(@resource)
end

def edit
  @resource = Resource.find(params[:id])
end

def update
  @resource = Resource.find(params[:id])
  @resource.update(resource_params)

  redirect_to resource_path(@resource)
end

def destroy
  @resource = Resource.find(params[:id])
  @resource.destroy

  redirect_to resources_path
end

# strong params
private
def resource_params
  params.require(:resource).permit(:text, :source_url)
end
end
