class AddOpenStackPasswordToDeployments < ActiveRecord::Migration
  def change
    add_column :fusor_deployments, :undercloud_user, :string
    add_column :fusor_deployments, :undercloud_password, :string
    add_column :fusor_deployments, :undercloud_ip, :string
    add_column :fusor_deployments, :undercloud_port, :string
  end
end
