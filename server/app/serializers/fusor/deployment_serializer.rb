module Fusor
  class DeploymentSerializer < ActiveModel::Serializer

    embed :ids, include: true
    attributes :id, :name, :description,
               :deploy_rhev, :deploy_cfme, :deploy_openstack,
               :rhev_engine_admin_password,
               :rhev_database_name, :rhev_cluster_name, :rhev_storage_name,
               :rhev_storage_type, :rhev_storage_address, :rhev_cpu_type, :rhev_share_path,
               :rhev_export_domain_name, :rhev_export_domain_address,
               :rhev_export_domain_path, :rhev_local_storage_path,
               :rhev_gluster_node_name, :rhev_gluster_node_address,
               :rhev_gluster_ssh_port, :rhev_gluster_root_password,
               :rhev_is_self_hosted, :cfme_install_loc,
               :foreman_task_uuid, :upstream_consumer_uuid, :upstream_consumer_name,
               :rhev_root_password, :cfme_root_password,
               :created_at, :updated_at

    has_one :organization, serializer: ::OrganizationSerializer
    has_one :lifecycle_environment, serializer: ::LifecycleEnvironmentSerializer
    # has one engine
    has_one :discovered_host, serializer: ::HostSerializer
    # has many hypervisors
    has_many :discovered_hosts, serializer: ::HostSerializer

  end
end
