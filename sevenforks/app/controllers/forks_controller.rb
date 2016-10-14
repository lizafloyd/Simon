class ForksController < ApplicationController
def index
  @forks = Fork.all
end

def show
  @fork = Fork.find(params[:id])
end

def new
  @fork = Fork.new
end

def create
  @fork = Fork.create(fork_params)

  redirect_to fork_path(@fork)
end

def edit
  @fork = Fork.find(params[:id])
end

def update
  @fork = Fork.find(params[:id])
  @fork.update(fork_params)

  redirect_to fork_path(@fork)
end

def destroy
  @fork = Fork.find(params[:id])
  @fork.destroy

  redirect_to forks_path
end

# strong params
private
def fork_params
  params.require(:fork).permit(:topic, :name)
end
end
